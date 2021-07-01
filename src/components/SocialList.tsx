import React from "react";
import URL from "../assets/URL.svg";
import Facebook from "../assets/facebook-alt.svg";
import Instagram from "../assets/instagram-alt.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Facebook"
        href={`https://facebook.com/${config.facebook_account}`}
        target="_blank"
        rel="noopener"
      >
        <Facebook width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="Instagram"
        href={`https://instagram.com/${config.instagram_account}`}
        target="_blank"
        rel="noopener"
      >
        <Instagram width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="Website"
        href={`${config.website_url}`}
        target="_blank"
        rel="noopener"
      >
        <URL width={24} height={24} fill={"#222"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
