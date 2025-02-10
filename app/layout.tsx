import Navigation from "../component/navigation";
import "../styles/global.css";

export const metadata = {
  title: {
    template: "%s | Mypage",
    default: "Mypage",
  },
  description: "Mypage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {" "}
        <Navigation />
        {children}
      </body>
    </html>
  );
}
