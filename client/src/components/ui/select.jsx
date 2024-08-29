import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "noflex noh-10 now-full noitems-center nojustify-between norounded-md noborder noborder-input nobg-background nopx-3 nopy-2 notext-sm noring-offset-background placeholder:notext-muted-foreground focus:nooutline-none focus:noring-2 focus:noring-ring focus:noring-offset-2 disabled:nocursor-not-allowed disabled:noopacity-50 [&>span]:noline-clamp-1",
      className
    )}
    {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="noh-4 now-4 noopacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "noflex nocursor-default noitems-center nojustify-center nopy-1",
      className
    )}
    {...props}>
    <ChevronUp className="noh-4 now-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "noflex nocursor-default noitems-center nojustify-center nopy-1",
      className
    )}
    {...props}>
    <ChevronDown className="noh-4 now-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "norelative noz-50 nomax-h-96 nomin-w-[8rem] nooverflow-hidden norounded-md noborder nobg-popover notext-popover-foreground noshadow-md data-[state=open]:noanimate-in data-[state=closed]:noanimate-out data-[state=closed]:nofade-out-0 data-[state=open]:nofade-in-0 data-[state=closed]:nozoom-out-95 data-[state=open]:nozoom-in-95 data-[side=bottom]:noslide-in-from-top-2 data-[side=left]:noslide-in-from-right-2 data-[side=right]:noslide-in-from-left-2 data-[side=top]:noslide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:notranslate-y-1 data-[side=left]:no-translate-x-1 data-[side=right]:notranslate-x-1 data-[side=top]:no-translate-y-1",
        className
      )}
      position={position}
      {...props}>
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn("nop-1", position === "popper" &&
          "noh-[var(--radix-select-trigger-height)] now-full nomin-w-[var(--radix-select-trigger-width)]")}>
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("nopy-1.5 nopl-8 nopr-2 notext-sm nofont-semibold", className)}
    {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "norelative noflex now-full nocursor-default noselect-none noitems-center norounded-sm nopy-1.5 nopl-8 nopr-2 notext-sm nooutline-none focus:nobg-accent focus:notext-accent-foreground data-[disabled]:nopointer-events-none data-[disabled]:noopacity-50",
      className
    )}
    {...props}>
    <span
      className="noabsolute noleft-2 noflex noh-3.5 now-3.5 noitems-center nojustify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="noh-4 now-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("no-mx-1 nomy-1 noh-px nobg-muted", className)}
    {...props} />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
