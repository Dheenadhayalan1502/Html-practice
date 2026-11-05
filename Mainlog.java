

package new portfolio;

/**
 * Mainlog
 */
import java.lang.System.Logger;
public class Mainlog 
{
    /**
     * @param args
     */
    public static void main(String[] args)
    {
        Logger logger = Logger.getInstance();
         Logger logger1;
         logger1.logError("Database connection failed");

        Logger logger2 = Logger.getInstance();

        logger2.logInfo("User logged in");

        System.out.println(logger1 == logger2);
    }
    
}
