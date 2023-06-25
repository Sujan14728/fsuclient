import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Free Student Union</title>
      <link rel="icon" type="images/x-icon" href="/logofsu.png" />
      <link
        rel="stylesheet"
        href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css"
      />
      <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
      <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
