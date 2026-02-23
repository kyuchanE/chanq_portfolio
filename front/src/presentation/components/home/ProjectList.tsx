'use client';

type ProjectListProps = {
    className?: string;
}

export const ProjectList: React.FC<ProjectListProps> = ({
    className = ""
}) => {
    return (
        <div className={['flex flex-col', className].join(" ")}>

        </div>
    )
}