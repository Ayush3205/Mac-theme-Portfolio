import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>
      <div className="p-4 bg-white">
        {data.image && (
          <img src={data.image} alt={data.name} className="w-full h-auto mb-4" />
        )}
        {data.subtitle && (
          <h3 className="text-lg font-semibold mb-2">{data.subtitle}</h3>
        )}
        {data.description &&
          data.description.map((para, index) => (
            <p key={index} className="mb-2 text-sm">
              {para}
            </p>
          ))}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
