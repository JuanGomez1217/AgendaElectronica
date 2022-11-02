# AgendaElectronica

public class SchedulingUsingTimerTask extends TimerTask {
 
    @Override
    public void run() {
        System.out.println("Timer task executed :: " + new Date() + " :: " + Thread.currentThread().getName());
    }
     
    public static void main(String[] args) throws ParseException {
         
        Timer timer = new Timer(); // Instantiates a timer to schedule tasks
 
        SchedulingUsingTimerTask task1 = new SchedulingUsingTimerTask(); // Task 1 Instantiation
         
        timer.schedule(task1, 5 * 1000); // Schedules task 1 for execution after the specified delay of 5 seconds
 
        SimpleDateFormat sdf  = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");
        Date date = sdf.parse("04-09-2019 01:36:00");
         
        SchedulingUsingTimerTask task2 = new SchedulingUsingTimerTask(); // Task 2 Instantiation
         
        timer.schedule(task2, date); // Schedules task 2 for execution at the particular time defined by date
         
        // timer.cancel(); // Terminates the Timer and cancels all the scheduled tasks
    }
}
