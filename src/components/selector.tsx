import { FormControl, FormItem, FormLabel } from "./ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";

type props = {
    onValueChange?: (data: unknown) => void;
    fieldValues: string | undefined;
    disabled?: boolean;
    title: string;
    placeholder: string;
    info:
        | {
              id?: string;
              value: string;
              label: string;
          }[]
        | undefined;
};

const Selector = ({
    onValueChange,
    fieldValues,
    disabled,
    title,
    placeholder,
    info,
}: props) => {
    return (
        <FormItem>
            <FormLabel>{title}</FormLabel>
            <Select
                onValueChange={onValueChange}
                defaultValue={fieldValues}
                disabled={disabled}
            >
                <FormControl>
                    <SelectTrigger className="font-bold -tracking-wide">
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-zinc-800 -tracking-wide">
                    {info?.map((level) => (
                        <SelectItem
                            key={level.id ?? crypto.randomUUID()}
                            className="transition-all hover:cursor-pointer hover:bg-neutral-700"
                            value={level.value}
                        >
                            {level.id ?? null}&nbsp;{level.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </FormItem>
    );
};

export default Selector;
