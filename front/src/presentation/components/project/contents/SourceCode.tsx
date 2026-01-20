type SourceCodeProps = {
    className?: string
}

export const SourceCode: React.FC<SourceCodeProps> = ({
    className = ""
}) => {
    return (
        <div className={['', className].join(" ")}>

        </div>
    )
}