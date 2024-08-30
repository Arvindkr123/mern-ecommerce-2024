import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva } from "class-variance-authority";
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "nofixed notop-0 noz-[100] noflex nomax-h-screen now-full noflex-col-reverse nop-4 sm:nobottom-0 sm:noright-0 sm:notop-auto sm:noflex-col md:nomax-w-[420px]",
      className
    )}
    {...props} />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "nogroup nopointer-events-auto norelative noflex now-full noitems-center nojustify-between nospace-x-4 nooverflow-hidden norounded-md noborder nop-6 nopr-8 noshadow-lg notransition-all data-[swipe=cancel]:notranslate-x-0 data-[swipe=end]:notranslate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:notranslate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:notransition-none data-[state=open]:noanimate-in data-[state=closed]:noanimate-out data-[swipe=end]:noanimate-out data-[state=closed]:nofade-out-80 data-[state=closed]:noslide-out-to-right-full data-[state=open]:noslide-in-from-top-full data-[state=open]:sm:noslide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "noborder nobg-background notext-foreground",
        destructive:
          "nodestructive nogroup noborder-destructive nobg-destructive notext-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    (<ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props} />)
  );
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "noinline-flex noh-8 noshrink-0 noitems-center nojustify-center norounded-md noborder nobg-transparent nopx-3 notext-sm nofont-medium noring-offset-background notransition-colors hover:nobg-secondary focus:nooutline-none focus:noring-2 focus:noring-ring focus:noring-offset-2 disabled:nopointer-events-none disabled:noopacity-50 group-[.destructive]:noborder-muted/40 group-[.destructive]:hover:noborder-destructive/30 group-[.destructive]:hover:nobg-destructive group-[.destructive]:hover:notext-destructive-foreground group-[.destructive]:focus:noring-destructive",
      className
    )}
    {...props} />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "noabsolute noright-2 notop-2 norounded-md nop-1 notext-foreground/50 noopacity-0 notransition-opacity hover:notext-foreground focus:noopacity-100 focus:nooutline-none focus:noring-2 group-hover:noopacity-100 group-[.destructive]:notext-red-300 group-[.destructive]:hover:notext-red-50 group-[.destructive]:focus:noring-red-400 group-[.destructive]:focus:noring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}>
    <X className="noh-4 now-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("notext-sm nofont-semibold", className)}
    {...props} />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cn("notext-sm noopacity-90", className)} {...props} />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

export { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction };
