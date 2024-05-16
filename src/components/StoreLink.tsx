import AppleLogo from "../assets/logos/app_store.svg";
import GooglePlay from "../assets/logos/google_play.svg";
import GooglePlayBright from "../assets/logos/google_play_bright.svg";
import Button from "../components/Button";

interface StoreLinkProps {
  type: BtnTypes;
}

export enum BtnTypes {
  Primary = "primary",
  Variant = "variant",
}
export default function StoreLink({ type }: StoreLinkProps) {
  if (type === BtnTypes.Primary) {
    return (
      <div className="mt-10 hidden justify-center space-x-2 sm:flex md:justify-normal">
        <Button
          href="https://www.apple.com"
          className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
          logo={AppleLogo}
          alt="Apple Logo"
          Uppertext="Download on the"
          Lowertext="App store"
        />
        <Button
          href="https://play.google.com"
          className="flex gap-3 rounded-lg bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-800"
          logo={GooglePlay}
          alt="Apple Logo"
          Uppertext="Download on the"
          Lowertext="Play store"
        />
      </div>
    );
  }

  if (type === BtnTypes.Variant) {
    return (
      <>
        <Button
          href="https://www.apple.com"
          className="my-4 flex gap-3 rounded-lg border bg-transparent px-2 py-1 text-white hover:bg-zinc-950 active:bg-zinc-800"
          logo={AppleLogo}
          alt="Apple Logo"
          Uppertext="Download on the"
          Lowertext="App store"
        />
        <Button
          href="https://play.google.com"
          className="my-4 flex gap-3 rounded-lg border bg-transparent px-2 py-1 text-white hover:bg-zinc-950 active:bg-zinc-800"
          logo={GooglePlayBright}
          alt="Apple Logo"
          Uppertext="Download on the"
          Lowertext="Play store"
        />
      </>
    );
  }
}
