import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function YearSelectInput({ data, labelTitle, selectLabelTitle, ...props }) {
    return (
        <>
            {labelTitle && <Label {...props}>{labelTitle}</Label>}
            <Select {...props}>
                <SelectTrigger className="w-full">
                    <SelectValue {...props} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{selectLabelTitle}</SelectLabel>
                        {data &&
                            data.map((d, index) => (
                                <SelectItem key={index} value={d.id}>
                                    {d.year}
                                </SelectItem>
                            ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </>
    );
}
