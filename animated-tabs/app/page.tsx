import AnimatedTab from "@/copmonents/Animated-tabs";
import GooeySearch from "@/copmonents/GooeySearch";
import MovieTickeBtn from "@/copmonents/MovieTickeBtn";
import GooeyTooltip from "@/copmonents/GooeyTooltip";
import AnimatedNumber from "@/copmonents/AnimatedNumber";
import LinkPreview from "@/copmonents/LinkPreview";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start py-16 px-8">
        <h1 className="text-neutral-950 font-semibold text-3xl">Components</h1>
        <div className="border relative rounded border-neutral-100 bg-white w-full mt-12 h-fit py-3 flex items-center justify-center">
          <p className="absolute top-2 left-2 px-3 rounded-md bg-neutral-900 text-white ">
            Animated tab
          </p>
          <AnimatedTab />
        </div>{" "}
        <div className="border relative  rounded border-neutral-100 bg-neutral-950 w-full mt-12 h-fit py-8 flex items-center justify-center">
          <p className="absolute top-2 left-2 px-3 rounded-md bg-neutral-900 text-neutral-50 ">
            Movie Ticket Btn
          </p>
          <MovieTickeBtn />
        </div>
        <div className="border relative  rounded border-neutral-100 bg-white w-full mt-12 h-fit py-8 flex items-center justify-center">
          <p className="absolute top-2 left-2 px-3 rounded-md bg-neutral-900 text-neutral-50 ">
            Gooey Search
          </p>
          <GooeySearch />
        </div>{" "}
        <div className="border relative  rounded border-neutral-100 bg-white w-full mt-12 h-fit py-8 flex items-center justify-center">
          <p className="absolute top-2 left-2 px-3 rounded-md bg-neutral-900 text-neutral-50 ">
            Gooey ToolTip
          </p>
          <GooeyTooltip />
        </div>{" "}
        <div className="border relative  rounded border-neutral-100 bg-white w-full mt-12 h-fit py-8 flex items-center justify-center">
          <p className="absolute top-2 left-2 px-3 rounded-md bg-neutral-900 text-neutral-50 ">
            Animated Number
          </p>
          <AnimatedNumber />
        </div>{" "}
        <div className="border relative  rounded border-neutral-100 bg-white w-full mt-12 h-fit py-8 flex items-center justify-center">
          <p className="absolute top-2 left-2 px-3 rounded-md bg-neutral-900 text-neutral-50 ">
            Link Preview
          </p>
          <LinkPreview />
        </div>
      </main>
    </div>
  );
}
