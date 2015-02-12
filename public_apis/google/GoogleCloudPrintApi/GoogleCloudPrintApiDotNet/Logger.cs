using log4net;
using log4net.Config;
using System;

namespace Renlearn.AcceleratedLearningPlan.Logs
{
    public class Logger : ILogger
    {
		private static readonly string LoggerName = "AcceleratedLearningPlanService";

        static Logger()
        {
			// Fire up log4net logging
			XmlConfigurator.Configure();
			Instance = LogManager.GetLogger(LoggerName);
        }

        private static ILog Instance { get; set; }

        public void WriteError(Exception e)
        {
            Instance.Error(e);
        }
        
        public void WriteError(string message)
		{
			Instance.Error(message);
		}

		public void WriteInfo(string message)
		{
			Instance.Info(message);
		}
    }
}