import { useState } from "react";
import AiChatBot from "./AiChatBox";
import { Button } from "./ui/button";
import { Bot } from "lucide-react";

export default function AiChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setChatBoxOpen(true)}>
        <Bot size={20} className="mr-2" />
        AI Chat
      </Button>
      <AiChatBot open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
