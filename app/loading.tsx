import Container from "@/components/common/container";

export default function Loading() {
  return (
    <Container className="flex min-h-[85vh] flex-col items-center justify-center space-y-6">
      <p className="text-lg tracking-tight text-muted-foreground lowercase">...</p>
    </Container>
  );
}
