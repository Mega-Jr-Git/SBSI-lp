import { useLocale } from "../../../shared/i18n/useLocale";
import { CallPageLayout } from "../../../shared/components/call-page/CallPageLayout";
import { tmSi2027Content, tmSi2027Links } from "./tm-si-2027.content";

export default function TmSi2027Page() {
  const { locale } = useLocale();
  const content = tmSi2027Content[locale];

  return (
    <CallPageLayout
      id="tm-si-2027"
      content={content}
      links={tmSi2027Links}
      criteriaBullets
    />
  );
}