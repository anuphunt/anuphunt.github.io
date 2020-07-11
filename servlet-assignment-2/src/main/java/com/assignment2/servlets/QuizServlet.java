package com.assignment2.servlets;

import com.assignment2.Quiz;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/quiz")
public class QuizServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();

        HttpSession session = req.getSession();
        if(session.getAttribute("Quiz") == null){
            session.setAttribute("Quiz", new Quiz());
        }

        Quiz quiz = (Quiz) session.getAttribute("Quiz");

        String ans = req.getParameter("txtAnswer");
        if( ans != null && quiz.isCorrect(ans)){
            quiz.scoreAnswer();
            session.setAttribute("Error", false);
        }
        else {
            session.setAttribute("Error", true);
        }

        RequestDispatcher rd = req.getRequestDispatcher("/quizview");
        rd.forward(req, resp);
    }


}
