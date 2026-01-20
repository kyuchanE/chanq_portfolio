
type ProfileSectionProps = {
    className?: string
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
    className = ""
}) => {
    return (
        <section className={['min-h-0 overflow-y-auto overflow-x-auto bg-content_black_1 border-l border-l-content_black_0 p-5', className].join(" ")}>

        </section>
    )
}