import Container from "@/components/common/container";
import LogoAnimated from "@/components/logo-animated";

export default function Loading() {
  return (
    <Container className="flex min-h-[95vh] flex-col items-center justify-center space-y-6">
      <LogoAnimated />
    </Container>
  );
}
