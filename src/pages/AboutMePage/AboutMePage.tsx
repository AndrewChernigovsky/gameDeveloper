import './AboutMePage.css'
import { images } from './../../Content/About/images';
import { Coding, Sowftware, LevelSkills } from './Images'

interface IModeTheme {
	isDark: boolean;
}

const AboutMePage = ({ isDark }: IModeTheme) => {
	return (
		<main className="main">
			<div className="aboutMe-wrapper">
				<div className="aboutMe-inner">
					<div className="avatar aboutMe-avatar ">
						<picture>
							<source media="(min-width: 768px)" srcSet={`${images.avatar['320px@4x']} 4x, ${images.avatar['320px@4x']} 2x, ${images.avatar['320px@4x']} 1x `} type="image/webp" />
							<source media="(min-width: 480px)" srcSet={`${images.avatar['320px@4x']} 4x, ${images.avatar['320px@4x']} 2x, ${images.avatar['320px@2x']} 1x `} type="image/webp" />
							<img src={`${images.avatar['320px']}`} srcSet={`${images.avatar['320px@4x']} 4x, ${images.avatar['320px@2x']} x, ${images.avatar['320px@1x']} 1x `} alt="avatar game developer Alexandr Volyanskiy" />
						</picture>
					</div>
					<div className="aboutMe-skills">
						<div className="aboutMe-skills-block">
							<div className="name-skills">
								<h2 className='title'>Coding</h2>
								<Coding/>
							</div>
							
							<ul  className='aboutMe-skills-list'>
								<li><span>С++</span></li>
								<li><span>С#</span></li>
								<li><span>UE4 Blueprints</span></li>
								<li><span>HTML</span></li>
							</ul>
							
						</div>
						<div className="aboutMe-skills-block">
							<div className="name-skills">
								<h2 className='title'>Software</h2>
								<Sowftware/>
							</div>
					
							<ul className='aboutMe-skills-list'>
								<li><span>Perforce</span></li>
								<li><span>GIT</span></li>
								<li><span>SVN</span></li>
								<li><span>Unreal Engine 4</span></li>
							</ul>

							<ul className='aboutMe-skills-list'>
								<li><span>Premiero Pro</span></li>
								<li><span>After Effects</span></li>
							</ul>

							<ul className='aboutMe-skills-list'>
								<li><span>Visual Srudio</span></li>
								<li><span>VMWare</span></li>
							</ul>

							<ul className='aboutMe-skills-list'>
								<li><span>Word</span></li>
								<li><span>PowerPonit</span></li>
								<li><span>Excel</span></li>
								<li><span>Outlook</span></li>
							</ul>


						</div>
						


					</div>
				</div>

				<div className="aboutMe-text">
					<p>
						У меня есть большой коммерческий опыт работы на позиции Дженералиста UE4/5 более 2 лет без учёта обучения с уклоном в Level дизайн. Поэтому мой опыт релевантен под вас.
						C++ изучаю примерно с 14 лет
						В контексте unreal +- 1.5 года
						Лидер, управлял работой двух крупных команд в общей сумме около полугода
					</p>
				</div>
				<div className="aboutMe-text">
					<h3>Hard skills:</h3>
					<ul>
						<li><span>- С++ </span></li>
						<li><span>- Level design </span></li>
						<li><span>- Blueprint</span></li>
						<li><span>- Modeling </span></li>
						<li><span>- Шейдеры, материалы в UE </span></li>
						<li><span>- Cinematic </span></li>
						<li><span>- Sound(Настройка)</span></li>
					</ul>
				</div>
				<div className="aboutMe-text">
					<h3>Software:</h3>
					<p>	Unreal Engine 4/5,Blender ,Cascadeur,Gimp 2.8, Visual Studio,GIT,VMware,Word,PowerPoint,Excel,OutLook</p>
				</div>
				<div className="aboutMe-text">
					<h3>Soft skills:</h3>
					<ul>
						<li><span>- Трудоголик </span></li>
						<li><span>- Ответственность и аккуратность</span></li>
						<li><span>- Обучаемость</span></li>
						<li><span>- Опыт работы в команде </span></li>
					</ul>
				</div>
				<div className="aboutMe-text">
					<h3>Контакты:</h3>
					<ul>
						<li><span>- Почта:  <a href="mailto:stiem.ru@mail.ru ">stiem.ru@mail.ru </a></span></li>
						<li><span>- Телефон: <a href="tel:+79203388540">+7920 33 88 540</a></span></li>
						<li><span>- Мои работы – <a href="https://drive.google.com/drive/folders/1M-o3jNEEJGLkU_y6nerZfIbV6qEcrYjD">Google Диск</a></span></li>
					</ul>
				</div>
			</div>
			
		</main>
	);
}

export default AboutMePage;