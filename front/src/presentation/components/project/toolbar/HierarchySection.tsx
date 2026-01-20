
type HierarchySectionProps = {
    className?: string;
}

export const HierarchySection: React.FC<HierarchySectionProps> = ({
    className = "",
}) => {
    return (
        <section className={['min-h-0 overflow-y-auto overflow-x-auto bg-content_black_1 border-l border-l-content_black_0 p-5', className].join(" ")}>
            <div className="h-24 bg-gray-50" />
            <div className="h-24 bg-gray-50" />
            <div className="h-24 min-w-[600px] bg-black" />
            <div className="h-24 bg-gray-50" />
            <div className="h-24 bg-gray-50" />
            <div className="h-24 bg-gray-50" />
            <div className="h-24 bg-black" />
            <div className="h-24 bg-gray-50" />
            <div className="h-24 bg-gray-50" />
            <div className="h-24 bg-black" />
            <div className="h-24 bg-gray-50" />
        </section>
    )
}