import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }}/>
                <span className={styles.currentExperience} style={{ left: '50%' }}>300 xp</span>
            </div>
            <span>600 xp</span>
        </header>
    )
}
// interface ButtonProps {
//     color: string;
// }
// export class ExperienceBar extends Component {
//     render() {
//         return(
//             <header className="experience-bar">
//                 <span>0 xp</span>
//                 <div>
//                     <div style={{ width: '50%' }}/>
//                     <span className="current-experience" style={{ left: '50%' }}>300 xp</span>
//                 </div>
//                 <span>600 xp</span>
//             </header>
//         )
//     }
// }

// export class Button extends Component<ButtonProps> {
//     render() {
//         return(
//             <button>
//                 {this.props.color}
//             </button>
//         );
//     }
// }