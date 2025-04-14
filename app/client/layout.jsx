import HeaderClient from "../ui/components/HeaderCliente";

export default function ClientPage({ children }) {
  return (
    <div>
      <HeaderClient />
      <div>{children}</div>
    </div>
  );
}
