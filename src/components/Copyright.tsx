import config from "../lib/config";
export default function Copyright() {
  return (
    <>
      <p>&copy; 2021 <a href={`${config.website_url}`}>SidToons.com</a></p>
      <style jsx>
        {`
          p {
            font-size: 0.75rem;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
