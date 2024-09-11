import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faHtml5, faCss3Alt, faJava, faNode, faBootstrap, faCuttlefish } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFireAlt } from '@fortawesome/free-solid-svg-icons';

export default function Technologies() {
  return (
    <div className="lg:pt-12 pt-12 font-Inter bg-blue-50 dark:bg-blue-950 lg:pb-20 pb-32">
      <div className="header lg:mx-20 mx-10 py-32">
        <h1 className="text-4xl dark:text-white text-blue-950 font-bold mt-5">
          Frameworks and Libraries.
        </h1>
      </div>

      <div className="relative flex overflow-hidden lg:mx-20 mx-10 pb-36">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          <div className="mx-12 text-center">
            <FontAwesomeIcon icon={faJs} className="text-8xl dark:text-white text-blue-950" />
            <span className="block mt-2 dark:text-white text-blue-950">JavaScript</span>
          </div>
          <div className="mx-12 text-center">
            <FontAwesomeIcon icon={faReact} className="text-8xl dark:text-white text-blue-950" />
            <span className="block mt-2 dark:text-white text-blue-950">React</span>
          </div>
          <div className="mx-12 text-center">
            <FontAwesomeIcon icon={faHtml5} className="text-8xl dark:text-white text-blue-950" />
            <span className="block mt-2 dark:text-white text-blue-950">HTML5</span>
          </div>
          <div className="mx-12 text-center">
            <FontAwesomeIcon icon={faCss3Alt} className="text-8xl dark:text-white text-blue-950" />
            <span className="block mt-2 dark:text-white text-blue-950">CSS3</span>
          </div>
          <div className="mx-12 text-center">
            <FontAwesomeIcon icon={faDatabase} className="text-8xl dark:text-white text-blue-950" />
            <span className="block mt-2 dark:text-white text-blue-950">Databases</span>
          </div>
          <div className="mx-12 text-center">
            <FontAwesomeIcon icon={faReact} className="text-8xl dark:text-white text-blue-950" />
            <span className="block mt-2 dark:text-white text-blue-950">React Native</span>
          </div>
          <div className="mx-12 text-center">
            <FontAwesomeIcon icon={faJava} className="text-8xl dark:text-white text-blue-950" />
            <span className="block mt-2 dark:text-white text-blue-950">Java</span>
          </div>
          <div className="mx-12 text-center">
            <FontAwesomeIcon icon={faNode} className="text-8xl dark:text-white text-blue-950" />
            <span className="block mt-2 dark:text-white text-blue-950">Node.js</span>
          </div>
          <div className="mx-12 text-center">
            <FontAwesomeIcon icon={faCuttlefish} className="text-8xl dark:text-white text-blue-950" />
            <span className="block mt-2 dark:text-white text-blue-950">C Programming.</span>
          </div>
          <div className="mx-12 text-center">
            <FontAwesomeIcon icon={faBootstrap} className="text-8xl dark:text-white text-blue-950" />
            <span className="block mt-2 dark:text-white text-blue-950">Bootstrap</span>
          </div>
          <div className="mx-12 text-center">
            <FontAwesomeIcon icon={faFireAlt} className="text-8xl dark:text-white text-blue-950" />
            <span className="block mt-2 dark:text-white text-blue-950">Firebase</span>
          </div>
          <div className="mx-12 text-center">
            <img src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2011%2024%22%3E%3Cpath%20fill%3D%22%23172554%22%20d%3D%22m10.562%209.518c-1.263-5.56-4.242-7.387-4.562-8.086-.262-.408-.508-.879-.711-1.372l-.022-.06c0%20.019%200%20.031-.005.049v.013.039.015.026.026.012s0%20.009%200%20.013v-.001.021c0%20.003.001.007.001.011s0%20.007-.001.011v.02.032l-.009.05v.01.006s0%20.004%200%20.006v.041h-.005v.016h-.036v.057h-.006v.046h-.024v.038.003s0%20.002%200%20.003v.01.005s0%20.003%200%20.005l-.023.017-.005.007v.022h-.005v.018h-.006v.045h-.006v.019h-.005v.018h-.005v.022h-.045v.015h-.005v.019h-.005v.015h-.006v.023h-.005v.006s0%200%200%200v.003s0%20.002%200%20.004c-.019.009-.035.021-.049.034-.003.003-.006.006-.009.01s0%200%200%200v.058h-.005v-.008h-.005v.01h-.005v.008h-.005v.022h-.061v.01h-.01v.02h-.03v.01h-.005v.006h-.01v.01h-.03v.006h-.005v.058h-.006v.01h-.005v.006h-.005v.006c-.004.006-.009.011-.014.016l-.012.01c-.014.01-.027.021-.039.032-.008.006-.015.011-.022.017l-.049.039-.074.062c-.057.047-.117.1-.186.159-.169.148-.37.338-.6.568l-.015.015c-2.234%202.374-3.637%205.553-3.729%209.059v.018c-.008.155-.013.336-.013.518%200%20.22.007.439.02.656l-.001-.03v.009c.112%201.765.628%203.389%201.456%204.808l-.028-.052c.308.54.614.999.948%201.435l-.022-.03c.727.963%201.555%201.795%202.483%202.503l.031.023c.255.766.403%201.647.403%202.563%200%20.076-.001.152-.003.227v-.011l.644.215c-.027-.303-.043-.655-.043-1.01%200-.533.035-1.058.102-1.572l-.006.061c.065-.257.186-.48.35-.664l-.001.002c.298-.213.559-.424.806-.651l-.006.006c.018-.019.028-.036.044-.054%202.227-2.09%203.614-5.051%203.614-8.337%200-.801-.082-1.582-.239-2.337l.013.074z%22%20class%3D%22color000000%20svgShape%22%2F%3E%3C%2Fsvg%3E" alt="MongoDB" />
            <span className="block mt-2 dark:text-white text-blue-950">MongoDB</span>
          </div>
        </div>
      </div>
    </div>
  );
}
