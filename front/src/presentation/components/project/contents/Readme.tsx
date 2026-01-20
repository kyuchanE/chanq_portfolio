
type ReadmeProps = {
    className?: string
}

export const Readme: React.FC<ReadmeProps> = ({
    className = ""
}) => {
    return (
        <div className={['', className].join(" ")}>

        </div>
    )
}