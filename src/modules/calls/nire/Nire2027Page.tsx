import { CallPageLayout } from "../../../shared/components/call-page/CallPageLayout";
import { useLocale } from "../../../shared/i18n/useLocale";
import { nire2027Content, nire2027Links } from "./nire-2027.content";

export default function Nire2027Page() {
  const { locale } = useLocale();
  return (
    <CallPageLayout
      id="nire-2027"
      content={nire2027Content[locale]}
      links={nire2027Links}
    />
  );
}
