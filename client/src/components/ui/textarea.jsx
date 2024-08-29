import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "noflex nomin-h-[80px] now-full norounded-md noborder noborder-input nobg-background nopx-3 nopy-2 notext-sm noring-offset-background placeholder:notext-muted-foreground focus-visible:nooutline-none focus-visible:noring-2 focus-visible:noring-ring focus-visible:noring-offset-2 disabled:nocursor-not-allowed disabled:noopacity-50",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
