
type LeftToolBarSectionProps = {
    className?: string;
    onVisibleHierarchyClick?: () => void;
}

export const LeftToolBarSection: React.FC<LeftToolBarSectionProps> = ({
    className = "",
    onVisibleHierarchyClick
}) => {
    return (
        <section className={['flex flex-col bg-content_black_1 gap-8 py-5', className].join(" ")}>
            <button
                onClick={onVisibleHierarchyClick}>
                <p className="text-content_gray">
                    H
                </p>
            </button>

            <button
                onClick={onVisibleHierarchyClick}>
                <p className="text-content_white">
                    A
                </p>
            </button>
        </section>
    )
}