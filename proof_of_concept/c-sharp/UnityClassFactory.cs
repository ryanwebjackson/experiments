using System;
using System.Collections.Generic;
using Microsoft.Practices.Unity;

namespace Renlearn.AcceleratedLearningPlan
{
	public class ClassFactory : IDisposable
	{
		private static IUnityContainer container;

		public ClassFactory( IUnityContainer inContainer )
		{
			container = inContainer;
		}

		public static IEnumerable<T> ResolveAll<T>()
		{
			return container.ResolveAll<T>();
		}

		public static T Resolve<T>()
		{
			return container.Resolve<T>();
		}

		public static T Resolve<T>( string name )
		{
			return container.Resolve<T>( name );
		}

		public static void RegisterTypeAsSingleton<TFrom, TTo>( string name = null ) where TTo : TFrom
		{
			container.RegisterType<TFrom, TTo>( name, new ContainerControlledLifetimeManager(), new InjectionConstructor() );
		}

		public static void RegisterTypeAsSingletonWithInjection<TFrom, TTo>( params object[] injectionMembers ) where TTo : TFrom
		{
			container.RegisterType<TFrom, TTo>( new ContainerControlledLifetimeManager(), new InjectionConstructor( injectionMembers ) );
		}
		#region IDisposable Implementation
		private bool _disposed;
		public void Dispose()
		{
			Dispose( true );
			GC.SuppressFinalize( this );
		}

		protected virtual void Dispose( bool disposing )
		{
			if ( !_disposed )
			{
				if ( disposing )
				{
					if ( container != null )
					{
						container.Dispose();
						container = null;
					}
				}
			}
			_disposed = true;
		}
		#endregion
	}
}
