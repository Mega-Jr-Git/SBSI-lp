import { useLocale } from "../../../shared/i18n/useLocale";
import { CallPageLayout } from "../../../shared/components/call-page/CallPageLayout";
import { tpSi2027Content, tpSi2027Links } from "./tp-si-2027.content";

export default function TpSi2027Page() {
  const { locale } = useLocale();
  const content = tpSi2027Content[locale];

  return (
    <CallPageLayout
      id="tp-si-2027"
      content={content}
      links={tpSi2027Links}
    />
  );
}