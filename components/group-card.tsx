import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import Link from "next/link"

interface GroupCardProps {
  group: {
    id: string
    name: string
    description: string
    agents: string[]
    lastActive: string
  }
}

export default function GroupCard({ group }: GroupCardProps) {
  // Map agent types to colors
  const agentColors: Record<string, string> = {
    تسويق: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "كتابة محتوى": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    تصميم: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    "تحسين محركات البحث": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    "أبحاث تجربة المستخدم": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    تطوير: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    "عمليات التطوير": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    "اختبار الجودة": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  }

  return (
    <Link href={`/chat/${group.id}`} className="rounded-md">
      <Card className="h-full flex flex-col transition-all hover:shadow-md hover:border-primary/50">
        <CardHeader>
          <CardTitle>{group.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-1 justify-between">
          <p className="text-muted-foreground mb-4">{group.description}</p>
          <div className="flex flex-wrap gap-2">
            {group.agents.map((agent) => (
              <Badge key={agent} className={`${agentColors[agent] || ""}`}>
                {agent}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="text-sm mt-auto text-muted-foreground flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>نشط {group.lastActive}</span>
        </CardFooter>
      </Card>
    </Link>
  )
}

