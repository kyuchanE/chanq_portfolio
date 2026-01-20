
type ContentSectionProps = {
    className?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
    className = ""
}) => {
    return (
        <section className={['min-h-0 min-w-0 overflow-y-auto overflow-x-auto bg-content_black_2', className].join(" ")}>
            {/* Selected Tab */}
            <div className="min-w-screen h-[40px] sticky top-0 bg-content_black_3">
                <div className="h-full w-[150px] bg-content_black_2" >

                </div>
            </div>
            {/* Contents */}
            <div className="min-w-screen p-5">
                <div className="w-[1080px] h-[50px] p-30 bg-blue-500" />
                <div className="h-[1080px] w-[50px] p-30 bg-blue-500" />
            </div>
        </section>
    )
}