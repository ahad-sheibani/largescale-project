import { colord } from "colord";
import { tailwindColors } from "../../../../tailwind.config";

const getTextColor = (backgroundcolor: string): string => {
  return colord(backgroundcolor).isDark() ? "#dddddd" : "#333333";
};

export const Colors: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center" lang="en" dir="ltr">
      {Object.entries(tailwindColors).map(([name, color]) => {
        return <ColorBox name={name} key={name} color={color} />;
      })}
    </div>
  );
};

const ColorBox: React.FC<{ name: string; color: string }> = ({
  name,
  color,
}) => {
  return (
    <div
      className="w-96 h-60 flex flex-col items-center justify-center text-center uppercase"
      style={{ backgroundColor: color, color: getTextColor(color) }}
    >
      <span>{name}</span>
      <span>{color}</span>
    </div>
  );
};
