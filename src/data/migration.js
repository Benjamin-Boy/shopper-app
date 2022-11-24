import fs from "fs";
import axios from "axios";
// import gql from "graphql-tag";
// import pkg from "@hygraph/management-sdk";
import * as dotenv from "dotenv";
import { GraphQLClient, gql } from "graphql-request";
dotenv.config();
// const { Client } = pkg;

const HYGRAPH_ENDPOINT =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clamhrqmq2z5s01td2q29b8rs/master";
const HYGRAPH_TOKEN =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjkxMDU5NzIsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xhbWhycW1xMno1czAxdGQycTI5Yjhycy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiM2UxOTUwNDAtYTE0YS00M2ZiLThiNGYtOWNkYzU0OGViMzUwIiwianRpIjoiY2xhcnlsbjF4N25lZjAxdGMydWpiZnpkbSJ9.Qbi6wyL5mpsML9uHbtNusPmXk8f5KGNYKbJRPaZqH36L7amV875luzf-9If3QMH88nYVcsWdysGyR-IKsTt1xYstT9AFelAPRYFwvzAEr9YuftnAuG9vNQ94RWhGWVIyAj_8mKGKmh4sKlVqUvoY_Drpj9eYExKvD1kGkXio-YAglpycm41-Z8jA-MIXb-5ksuweTqo-osvKGXuDzyobi0lyBxpzpsWUm7l2ZCf41cn9tEtypMhmqx6Z66uN4zeIY77dU6OsKGxzotNdmY37GyYrVmtjGHQniu9yAKex_JGv4c95E0YB1QEaiioeqgc3HuBVTr1nlXykAXC8xEPUKIQU9i3hm6XhlGFyc-Pt_5zEclJJtXhf26Dg874mcz2KSTgpkqKAaeo7fqJS4mFjWrxsAb0kARfZk2IGPoUDlOS5-UtHXzqsiNTKLl97bANXyyZ1WjjfFXSUmI8akE7iot8ARf_YJXK5snOg0jFUdewM9X7ALAa0RrMcPUUd8uWK677lxUlq944izkhahFLlAz-mxrCWr-erf0k6pvlRouAmy5yna-ymKlBS4R7JJjxV8gciaLT34zW3YsVLXOo5drF6gtx6lhaOq0vU-4yLq7-_QX-1DJciQxWUVB_akYz_y0pP_ZTNsm4bGInYQdIbQOMLzFBm_v-HF9zt2r1MvFQ";

// Upload images
const imagesData = JSON.parse(fs.readFileSync("./hygraphImages.json"));

const uploadImages = async (imageUrl) => {
  const upload = await axios({
    method: "POST",
    url: `${HYGRAPH_ENDPOINT}/upload`,
    headers: {
      Authorization: `Bearer ${HYGRAPH_TOKEN}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: `url=${encodeURIComponent(imageUrl)}`,
  });

  return upload;
};

// Migrate existing content
const run = async () => {
  const data = JSON.parse(fs.readFileSync("./dataTEST.json"));

  createContentEntry(data);

  // const queue = new Queue("Hygraph Import");

  // await Promise.all(
  //   data.map(async (row) => {
  //     const job = await queue.createJob(row).backoff("fixed", 5000).save();

  //     return job;
  //   })
  // );

  // queue.on("job succeeded", (jobId) => console.log(`[SUCCESS]: ${jobId}`));
  // queue.on("job failed", (jobId, err) =>
  //   console.log(`[FAILED]: ${jobId} (${err})`)
  // );

  // await queue.process(async (job) => await createContentEntry(job.data));
};

const createContentEntry = async (variables) => {
  const client = new GraphQLClient(process.env.HYGRAPH_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  });

  const query = gql`
    mutation createProduct($productName: String, $price: Number) {
      createProduct(data: { productName: $productName, price: $price }) {
        id
        productName
      }
    }
  `;

  return client.request(query, variables);
};

// Upload images
// const interval = setInterval(
//   (gen) => {
//     const { value, done } = gen.next();

//     if (done) {
//       clearInterval(interval);
//     } else {
//       // console.log(value.url);
//       uploadImages(value.url);
//     }
//   },
//   1000,
//   imagesData[Symbol.iterator]()
// );

// Run migration
run();
