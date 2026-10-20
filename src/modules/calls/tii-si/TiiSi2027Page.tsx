import { CallPageLayout } from "../../../shared/components/call-page/CallPageLayout";
import { useLocale } from "../../../shared/i18n/useLocale";
import { tiiSi2027Content, tiiSi2027Links } from "./tii-si-2027.content";

export default function TiiSi2027Page() {
  const { locale } = useLocale();
  return (
    <CallPageLayout
      id="tii-si-2027"
      content={tiiSi2027Content[locale]}
      links={tiiSi2027Links}
    />
  );
}
