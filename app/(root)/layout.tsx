import LeftSidebar from "@/components/leftSidebar";
import RightSidebar from "@/components/rightSidebar";


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <main>
        <LeftSidebar />
        {children}
        <RightSidebar />
      </main>
    </div>
  );
}
