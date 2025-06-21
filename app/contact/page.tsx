import PageHeader from "@/components/page-header";
import { MessageForm } from "@/components/message/message-form";
import MotionDiv from "@/components/motion-div";

export default function MessagePage() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-20"
    >
      <div className="mx-auto max-w-2xl space-y-12">
        <PageHeader
          title="Get in Touch"
          description="Have a question or want to work together? Send me a message!"
        />
        <MessageForm />
      </div>
    </MotionDiv>
  );
}
