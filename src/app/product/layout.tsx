import Navs from "src/components/navs";

export default function Product({ children }) {
  return (
    <div>
      <Navs />
      {children}
    </div>
  );
}
