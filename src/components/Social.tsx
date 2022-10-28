import { SiTwitter, SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";

const Social = () => {
  return (
    <div className="text-primaryText text-5xl flex justify-start gap-16 mb-8">
      <SiTwitter />
      <SiInstagram />
      <SiFacebook />
      <SiTiktok />
    </div>
  );
};

export default Social;
