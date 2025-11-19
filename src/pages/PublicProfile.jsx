import ProfileHeader from "../components/PublicProfile/ProfileHeader";
import ActionButtons from "../components/PublicProfile/ActionButtons";
import AboutSection from "../components/PublicProfile/AboutSection";
import SocialLinks from "../components/PublicProfile/SocialLinks";
import MediaGallery from "../components/PublicProfile/MediaGallery";
import ShareInfoButton from "../components/PublicProfile/ShareInfoButton";

export default function PublicProfile() {
  return (
    <div className="min-h-screen bg-gray-100 max-w-md mx-auto shadow-lg pb-10">
      <ProfileHeader />
      <ActionButtons />
      <AboutSection />
      <SocialLinks />
      <MediaGallery />
      <ShareInfoButton />
    </div>
  );
}
