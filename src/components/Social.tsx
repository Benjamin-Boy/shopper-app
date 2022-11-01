import { SiTwitter, SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";

const Social = () => {
  return (
    <div className="text-primaryText text-5xl flex gap-6">
      <SiTwitter />
      <SiInstagram />
      <SiFacebook />
      <SiTiktok />
    </div>
  );
};

export default Social;
