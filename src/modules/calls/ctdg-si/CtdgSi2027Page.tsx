import { CallPageLayout } from "../../../shared/components/call-page/CallPageLayout";
import { useLocale } from "../../../shared/i18n/useLocale";
import { ctdgSi2027Content, ctdgSi2027Links } from "./ctdg-si-2027.content";

export default function CtdgSi2027Page() {
  const { locale } = useLocale();
  return (
    <CallPageLayout
      id="ctdg-si-2027"
      content={ctdgSi2027Content[locale]}
      links={ctdgSi2027Links}
    />
  );
}
