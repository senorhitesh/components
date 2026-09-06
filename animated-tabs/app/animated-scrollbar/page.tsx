import MacosNavbar from "@/copmonents/MacosNavbar";
const Page = () => {
  return (
    <div className="w-full bg-neutral-50">
      <MacosNavbar />

      <section id="home" className="h-100 bg-red-500">
        Home
      </section>

      <section id="Conributions" className="h-200 bg-purple-500">
        Conributions
      </section>

      <section id="projects" className="h-100 bg-yellow-500">
        Projects
      </section>

      <section id="contact" className="h-100 bg-green-500">
        Contact
      </section>
    </div>
  );
};

export default Page;
