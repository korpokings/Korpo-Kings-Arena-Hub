
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface TournamentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const TournamentCard = ({ title, description, icon, link }: TournamentCardProps) => {
  return (
    <div className="bg-korpo-black/80 backdrop-blur-sm rounded-lg p-6 border border-korpo-orange/20 hover:border-korpo-orange transition-all duration-300 h-full flex flex-col">
      <div className="text-korpo-orange mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-6 flex-grow">{description}</p>
      <Button asChild className="bg-korpo-orange hover:bg-amber-600 text-white w-full">
        <Link to={link}>En savoir plus</Link>
      </Button>
    </div>
  );
};

export default TournamentCard;
