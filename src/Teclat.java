/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.util.Scanner;
import java.util.InputMismatchException;

// Clase mediante la que se realizan las entradas por teclado
public class Teclat {

    private static final Scanner lectura = new Scanner(System.in);

    public static String leerString(String mensaje) // Leemos una cadena
    {
        String cadena = "";
        boolean correcto = false;

        do {
            System.out.print(mensaje);
            try {
                cadena = lectura.nextLine();
                correcto = true;
            } catch (Exception ex) {
                System.out.println("Error en la introducción de la string.");
            }
        } while (!correcto);
        return cadena;
    }

    public static float leerFloat(String mensaje) // Leemos un número decimal float
    {
        float numero = 0.0f;
        boolean correcto = false;

        do {
            System.out.print(mensaje);
            try {
                numero = lectura.nextFloat();
                correcto = true;
            } catch (InputMismatchException ex) {
                System.out.println("Error de formato.");
            }
            lectura.nextLine();
        } while (!correcto);
        return numero;
    }

    public static double leerDouble(String mensaje) // Leemos un número decimal double
    {
        double numero = 0.0;
        boolean correcto = false;

        do {
            System.out.print(mensaje);
            try {
                numero = lectura.nextDouble();
                correcto = true;
            } catch (InputMismatchException ex) {
                System.out.println("Error de formato.");
            }
            lectura.nextLine();
        } while (!correcto);
        return numero;
    }

    public static int leerInt(String mensaje) // Leemos un número entero
    {
        int numero = 0;
        boolean correcto = false;

        do {
            System.out.print(mensaje);
            try {
                numero = lectura.nextInt();
                correcto = true;
            } catch (InputMismatchException ex) {
                System.out.println("Error de formato.");
            }
            lectura.nextLine();
        } while (!correcto);
        return numero;
    }

    public static byte leerByte(String mensaje) // Leemos un byte
    {
        byte numero = 0;
        boolean correcto = false;

        do {
            System.out.print(mensaje);
            try {
                numero = lectura.nextByte();
                correcto = true;
            } catch (InputMismatchException ex) {
                System.out.println("Error de formato.");
            }
            lectura.nextLine();
        } while (!correcto);
        return numero;
    }

    public static char leerChar(String mensaje) // Leemos un carácter  -  http://stackoverflow.com/questions/13942701/take-a-char-input-from-the-scanner
    {
        char caracter = 0;
        boolean correcto = false;

        do {
            System.out.print(mensaje);
            try {
                caracter = lectura.next().charAt(0);	// Cogemos el primer carácter en una lectura de cadena
                correcto = true;
            } catch (InputMismatchException ex) {
                System.out.println("Error de formato.");
            } catch (Exception ex) {
                System.out.println(ex.toString());
            }
            lectura.nextLine();
        } while (!correcto);
        return caracter;
    }

    public static boolean leerSiNo(String mensaje) {
        boolean retorno = false;
        boolean correcto = false;
        String cadena = "";

        do {
            System.out.print(mensaje);
            try {
                cadena = lectura.nextLine().toUpperCase();
                correcto = true;
                if (cadena.charAt(0) == 'S') {
                    retorno = true;
                } else if (cadena.charAt(0) == 'N') {
                    retorno = false;
                } else {
                    System.out.println("Introducción no válida.");
                    correcto = false;
                }
            } catch (Exception ex) {
                System.out.println("Error en la introducción de la string.");
            }
        } while (!correcto);
        return retorno;
    }
}
