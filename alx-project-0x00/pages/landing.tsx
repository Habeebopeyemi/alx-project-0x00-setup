import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button
        title="Small / Rounded-sm"
        styles={{ size: "small", shape: "rounded-sm" }}
      />
      <Button
        title="Medium / Rounded-md"
        styles={{ size: "medium", shape: "rounded-md" }}
      />
      <Button
        title="Large / Rounded-full"
        styles={{ size: "large", shape: "rounded-full" }}
      />
    </div>
  );
};
export default Landing;
