import { Fragment } from "react";
import { AreaOptions, FieldRenderProps, getInputProps } from "./useInputArea";

export function Area({ options }: { options: AreaOptions<any> }) {
    return <>

        {options.sections.map((section) =>
            <div {...section.getProps()} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                marginBottom: 16
            }}>
                {section.lines.map(line => (
                    <div {...line.getProps()} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 8
                    }}>
                        {line.items.map(item => (item.render()))}
                    </div>))}
            </div>
        )}
    </>
}

export function RenderInput(props: FieldRenderProps) {
    return <div key={props.key} style={{
        display: 'flex',
        flexDirection: "column",
        width: '100%'
    }}>
        <input {...getInputProps(props)} style={{ width: '100%' }} />
        <span style={{ fontSize: 'small', color: 'red' }}>{props.errorText}</span>
    </div>
}
export function RenderSelect(options: string[]) {
    return (props: FieldRenderProps) => {
        return <div key={props.key} style={{
            display: 'flex',
            width: '100%',
            flexDirection: "column"
        }}>
            <select {...getInputProps(props)}
                style={{ width: '100%' }} >
                {options.map(option =>
                    <option
                        key={option}
                        value={option}>
                        {option}
                    </option>)}
            </select>
            <span style={{ fontSize: 'small', color: 'red' }}>{props.errorText}</span>
        </div>
    }
}