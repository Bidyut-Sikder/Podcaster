import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />

        <section className=" flex-col sm:px-14 px-4 flex-1  flex min-h-screen ">
          <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            <div className="flex h-16 items-center justify-between md:hidden ">
              <Image
                width={30}
                height={30}
                alt="logo.svg"
                src={"/icons/logo.svg"}
              />
              <MobileNav />
            </div>
            <div className="flex flex-col md:pb-14">
              Toster notification popups
              {children}
            </div>
          </div>
        </section>

        <RightSidebar />
      </main>
    </div>
  );
}
