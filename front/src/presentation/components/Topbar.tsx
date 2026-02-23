
type TopbarProps = {
    className?: string;
}

export const Topbar: React.FC<TopbarProps> = ({
    className = ""
}) => {

    return (
        <div className={['flex flex-row bg-white', className].join(" ")}>
            <h1>
                Topbar!!!
            </h1>
        </div>
    );
}