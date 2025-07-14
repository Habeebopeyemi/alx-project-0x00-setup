import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Rounded-sm" styles="rounded-sm px-4 py-2" />
      <Button title="Rounded-md" styles="rounded-md px-4 py-2" />
      <Button title="Rounded-full" styles="rounded-full px-4 py-2" />
      <Button title="Rounded-lg" styles="rounded-lg px-4 py-2" />
    </div>
  );
};
export default Landing;
