import { formatDistanceToNow } from "date-fns"
import { ar } from "date-fns/locale"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface ChatMessageProps {
  message: {
    id: string
    content: string
    sender: string
    timestamp: string
  }
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === "user"

  // Map agent types to colors
  const agentColors: Record<string, string> = {
    تسويق: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-800",
    "كتابة محتوى": "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-800",
    تصميم:
      "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:border-purple-800",
    "تحسين محركات البحث":
      "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-800",
    "أبحاث تجربة المستخدم":
      "bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900 dark:text-pink-300 dark:border-pink-800",
    تطوير: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900 dark:text-red-300 dark:border-red-800",
    "عمليات التطوير":
      "bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900 dark:text-indigo-300 dark:border-indigo-800",
    "اختبار الجودة":
      "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900 dark:text-orange-300 dark:border-orange-800",
  }

  const messageColor = isUser ? "" : agentColors[message.sender] || ""
  const formattedTime = formatDistanceToNow(new Date(message.timestamp), {
    addSuffix: true,
    locale: ar,
  })

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name === "user"
      ? "م"
      : name
          .split(" ")
          .map((part) => part[0])
          .join("")
  }

  return (
    <div className={`flex ${isUser ? "justify-start" : "justify-end"}`}>
      <div className={`flex max-w-[80%] ${isUser ? "flex-row" : "flex-row-reverse"} gap-2`}>
        <Avatar className="h-8 w-8 mt-1">
          <AvatarFallback>{getInitials(message.sender)}</AvatarFallback>
        </Avatar>
        <div className={`flex flex-col ${isUser ? "items-start" : "items-end"}`}>
          {!isUser && <span className="text-sm font-medium mb-1">{message.sender}</span>}
          <div
            className={`rounded-lg p-3 ${
              isUser ? "bg-primary text-primary-foreground" : `border ${messageColor || "bg-muted"}`
            }`}
          >
            <p className="whitespace-pre-wrap">{message.content}</p>
          </div>
          <span className="text-xs text-muted-foreground mt-1">{formattedTime}</span>
        </div>
      </div>
    </div>
  )
}

