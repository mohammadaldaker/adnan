import { User, ChevronsLeftRightEllipsis , BriefcaseBusiness } from "lucide-react"
import { FileUser } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
 
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  { 
    title: "Home",
    url: "/",
    icon: BriefcaseBusiness,
  },
  {
    title: "CV",
    url: "/cv",
    icon: FileUser,
  },
  {
    title: "My Works",
    url: "#",
    icon: ChevronsLeftRightEllipsis ,
  },
  {
    title: "About Me",
    url: "#",
    icon: User,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          
          <SidebarGroupContent >
            <SidebarMenu className="flex flex-col gap-4 p-2 rounded-lg mt-8 ml-2" >
              {items.map((item) => (
                <SidebarMenuItem className=" hover:text-primary hover:font-bold p-2 rounded-lg m-2" key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}